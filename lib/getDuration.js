import { FADE_VERTICAL, FADE } from './animationTypes';

export default function getTiming(animationType, transitionType) {
  switch (animationType) {
    case FADE_VERTICAL:
    case FADE:
      if (transitionType === 'PUSH') {
        return 230;
      }
      return 350;
    default:
      return 500;
  }
}
