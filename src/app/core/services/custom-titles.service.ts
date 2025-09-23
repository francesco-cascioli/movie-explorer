import { Injectable } from '@angular/core';

export interface CustomTitle {
  id: string;
  title: string;
  overview?: string;
  release_date?: string;
  vote_average?: number;
  poster_path?: string;
  backdrop_path?: string;
}

@Injectable({ providedIn: 'root' })
export class CustomTitlesService {
  private readonly storageKey = 'custom_titles_v1';

  list(): CustomTitle[] {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as CustomTitle[];
    } catch {
      return [];
    }
  }

  getById(id: string): CustomTitle | undefined {
    return this.list().find(t => t.id === id);
  }

  add(title: Omit<CustomTitle, 'id'>): CustomTitle {
    const item: CustomTitle = { id: this.generateId(), ...title };
    const items = this.list();
    items.push(item);
    this.save(items);
    return item;
  }

  update(id: string, patch: Partial<Omit<CustomTitle, 'id'>>): CustomTitle | undefined {
    const items = this.list();
    const idx = items.findIndex(t => t.id === id);
    if (idx === -1) return undefined;
    items[idx] = { ...items[idx], ...patch };
    this.save(items);
    return items[idx];
  }

  remove(id: string): void {
    const next = this.list().filter(t => t.id !== id);
    this.save(next);
  }

  upsert(item: Partial<CustomTitle> & Pick<CustomTitle, 'title'>): CustomTitle {
    if (item.id) {
      const updated = this.update(item.id, item);
      if (updated) return updated;
    }
    const { title, overview, release_date, vote_average, poster_path, backdrop_path } = item;
    return this.add({ title, overview, release_date, vote_average, poster_path, backdrop_path });
  }

  private save(items: CustomTitle[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  private generateId(): string {
    return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  }
}


