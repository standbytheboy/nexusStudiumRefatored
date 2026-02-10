import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItem } from '../../models/content-item/content-item-module';
import { Card } from '../card/card';
import { getImageByIndex, getAvatarByIndex } from '../data/mock-data';

@Component({
  selector: 'app-popular-courses',
  imports: [CommonModule, Card],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.css',
})
export class PopularCourses {
  public thumbCourse: ContentItem[] = [
    {
      bgImage: getImageByIndex(0),
      title: 'Dicas de Como se Tornar um Bom Lider',
      author: 'Leandro Silva',
      authorRole: 'Designer UX',
      authorAvatar: getAvatarByIndex(0),
      minutesToRead: 15
    },
    {
      bgImage: getImageByIndex(1),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(1),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(2),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(2),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(3),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(3),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(4),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(4),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(5),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(5),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(6),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(6),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(7),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(7),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(8),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(1),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(9),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(2),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(10),
      title: 'Figma: Dicas Essenciais para Iniciantes',
      author: 'Ana Clara',
      authorRole: 'Product Designer',
      authorAvatar: getAvatarByIndex(3),
      minutesToRead: 10
    },
    {
      bgImage: getImageByIndex(11),
      title: 'Como Manter o Foco em Home Office',
      author: 'Marcos Borges',
      authorRole: 'Scrum Master',
      authorAvatar: getAvatarByIndex(4),
      minutesToRead: 8
    }
  ];

  @ViewChild('carouselList') carouselList!: ElementRef;

  scrollLeft() {
    // tamanho de um card aproximado + gap
    this.carouselList.nativeElement.scrollBy({
      left: -480,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carouselList.nativeElement.scrollBy({
      left: 480,
      behavior: 'smooth'
    });
  }
}
