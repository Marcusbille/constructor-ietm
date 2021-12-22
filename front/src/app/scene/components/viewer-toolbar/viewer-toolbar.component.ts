import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CAMERA_ROTATE_SPEED, EXPLODE_POWER, VIEWER_BUTTONS } from '../../scene.component';

@Component({
  selector: 'app-viewer-toolbar',
  templateUrl: './viewer-toolbar.component.html',
  styleUrls: ['./viewer-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewerToolbarComponent implements OnInit {
  @Input() activeBtnIndex!: number;
  @Input() rotateAnimationSliderValue = CAMERA_ROTATE_SPEED;
  @Input() explodeSliderValue = EXPLODE_POWER;
  @Output() viewerBtnClicked = new EventEmitter<number>();
  @Output() rotateCameraSpeedChanged = new EventEmitter<number>();
  @Output() explodePowerChanged = new EventEmitter<number>();

  rotateAnimationSliderMinValue = CAMERA_ROTATE_SPEED;
  rotateAnimationSliderMaxValue = 20;
  rotateAnimationSliderStep = 1;
  explodeSliderMinValue = EXPLODE_POWER;
  explodeSliderMaxValue = 1.5;
  explodeSliderStep = 0.1;

  constructor() {}

  ngOnInit(): void {}

  rotateAnimationBtnIsActive() {
    return this.activeBtnIndex === VIEWER_BUTTONS.RotateAnimation;
  }

  explodeBtnIsActive() {
    return this.activeBtnIndex === VIEWER_BUTTONS.Explode;
  }

  hideObjectBtnIsActive() {
    return this.activeBtnIndex === VIEWER_BUTTONS.Hide;
  }

  restoreViewBtnIsActive() {
    return this.activeBtnIndex === VIEWER_BUTTONS.RestoreView;
  }

  resetCamera() {
    this.viewerBtnClicked.emit(VIEWER_BUTTONS.Home);
  }

  rotateCamera() {
    this.viewerBtnClicked.emit(VIEWER_BUTTONS.RotateAnimation);
  }

  explode() {
    this.viewerBtnClicked.emit(VIEWER_BUTTONS.Explode);
  }

  hideObject() {
    this.viewerBtnClicked.emit(VIEWER_BUTTONS.Hide);
  }

  restoreView() {
    this.viewerBtnClicked.emit(VIEWER_BUTTONS.RestoreView);
  }
}