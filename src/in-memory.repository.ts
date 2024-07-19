import { v4 as uuidv4 } from "uuid";

interface ResponseOptions<T> {
  include?: (keyof T)[];
}

export class InMemoryRepository<T extends { id: string }> {
  private data: T[] = [];

  private filterResponse(data: T, options?: ResponseOptions<T>): Partial<T> {
    if (options?.include && options.include.length > 0) {
      return options.include.reduce((result, key) => {
        result[key] = data[key];
        return result;
      }, {} as Partial<T>);
    }
    return { ...data }; // Garantir que um novo objeto seja retornado
  }

  async create(
    data: Omit<T, "id">,
    options?: ResponseOptions<T>
  ): Promise<Partial<T>> {
    const newData = { ...data, id: uuidv4() } as T;
    this.data.push(newData);
    return this.filterResponse(newData, options);
  }

  async update(
    id: string,
    data: Partial<Omit<T, "id">>,
    options?: ResponseOptions<T>
  ): Promise<Partial<T> | null> {
    const index = this.data.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.data[index] = { ...this.data[index], ...data } as T;
    return this.filterResponse(this.data[index], options);
  }

  async delete(id: string): Promise<void> {
    this.data = this.data.filter((p) => p.id !== id);
  }

  async findById(
    id: string,
    options?: ResponseOptions<T>
  ): Promise<Partial<T> | null> {
    const found = this.data.find((p) => p.id === id) || null;
    if (!found) return null;
    return this.filterResponse(found, options);
  }

  async findAll(options?: ResponseOptions<T>): Promise<Partial<T>[]> {
    return this.data.map((item) => this.filterResponse(item, options));
  }
}

// Teste da implementação
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}
