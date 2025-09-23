import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomTitlesService, CustomTitle } from '../core/services/custom-titles.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
  <div class="admin">
    <h2>Admin - Custom Titles</h2>

    <form (ngSubmit)="onSubmit()" class="form">
      <input [(ngModel)]="form.title" name="title" placeholder="Title" required />
      <input [(ngModel)]="form.release_date" name="release_date" placeholder="Release date (YYYY-MM-DD)" />
      <input [(ngModel)]="form.vote_average" name="vote_average" type="number" step="0.1" min="0" max="10" placeholder="Rating" />
      <input [(ngModel)]="form.poster_path" name="poster_path" placeholder="Poster URL (optional)" />
      <textarea [(ngModel)]="form.overview" name="overview" rows="3" placeholder="Overview"></textarea>

      <div class="actions">
        <button type="submit" class="btn btn-primary">{{ editingId ? 'Update' : 'Add' }}</button>
        <button type="button" class="btn" (click)="onClear()" *ngIf="editingId">Cancel</button>
      </div>
    </form>

    <div class="grid" *ngIf="items.length; else empty">
      <div class="card" *ngFor="let t of items">
        <img *ngIf="t.poster_path" [src]="t.poster_path" [alt]="t.title" />
        <div class="meta">
          <h3>{{ t.title }}</h3>
          <p *ngIf="t.release_date">Release: {{ t.release_date }}</p>
          <p *ngIf="t.vote_average">⭐ {{ t.vote_average }}</p>
          <p *ngIf="t.overview">{{ t.overview }}</p>
        </div>
        <div class="row">
          <button class="btn" (click)="onEdit(t)">Edit</button>
          <button class="btn btn-secondary" (click)="onDelete(t.id)">Delete</button>
        </div>
      </div>
    </div>

    <ng-template #empty>
      <p class="error-msg">No custom titles yet.</p>
    </ng-template>
  </div>
  `,
  styles: [`
    .admin { padding: 16px; }
    .form { display: grid; gap: 8px; max-width: 640px; padding: 0 16px; }
    .form input, .form textarea { padding: 8px 10px; border-radius: 6px; border: 1px solid #333; background:#1c1f2a; color:#fff; }
    .actions { display: flex; gap: 8px; margin-top: 8px; }
    .row { display:flex; gap:8px; padding:10px; }
  `]
})
export class AdminComponent implements OnInit {
  private svc = inject(CustomTitlesService);

  items: CustomTitle[] = [];
  editingId: string | null = null;
  form: Partial<CustomTitle> & { title: string } = { title: '' };

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.items = this.svc.list();
  }

  onSubmit() {
    if (!this.form.title?.trim()) return;
    if (this.editingId) {
      this.svc.update(this.editingId, this.form);
    } else {
      this.svc.add({
        title: this.form.title.trim(),
        overview: this.form.overview,
        release_date: this.form.release_date,
        vote_average: this.form.vote_average,
        poster_path: this.form.poster_path,
        backdrop_path: this.form.backdrop_path,
      });
    }
    this.onClear();
    this.load();
  }

  onEdit(item: CustomTitle) {
    this.editingId = item.id;
    this.form = { ...item } as any;
  }

  onDelete(id: string) {
    this.svc.remove(id);
    if (this.editingId === id) this.onClear();
    this.load();
  }

  onClear() {
    this.editingId = null;
    this.form = { title: '' };
  }
}


