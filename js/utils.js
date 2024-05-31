export function getColorClass(title) {
    switch (title.toLowerCase()) {
      case 'work':
        return 'card__container-work';
      case 'play':
        return 'card__container-play';
      case 'study':
        return 'card__container-study';
      case 'exercise':
        return 'card__container-exercise';
      case 'social':
        return 'card__container-social';
      case 'self care':
        return 'card__container-self-care';
      default:
        return '';
    }
  }
  