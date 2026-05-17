import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generate-alt-text',
  imports: [FormsModule, RouterLink],
  templateUrl: './generate-alt-text.html',
  styleUrl: './generate-alt-text.scss',
})
export class GenerateAltText {
  imageFileName = '';
  bookTitle = '';
  chapterName = '';
  imageType = 'Figure';
  metadata = '';
  generatedAltText = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.imageFileName = input.files?.[0]?.name || '';
  }

  generatePreview() {
    if (!this.imageFileName || !this.metadata.trim()) {
      this.generatedAltText = 'Upload an image and add metadata before generating alt text.';
      return;
    }

    const title = this.bookTitle.trim() || 'the selected book';
    const chapter = this.chapterName.trim() || 'the current chapter';

    this.generatedAltText = `${this.imageType} from ${title}, ${chapter}: ${this.metadata.trim()}`;
  }
}
