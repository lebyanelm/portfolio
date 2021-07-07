import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IPoint} from '../../interfaces/IPoint';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss'],
})
export class AnimatedBackgroundComponent implements AfterViewInit {
  @ViewChild('CanvasElement') canvasElement: ElementRef<HTMLCanvasElement>;

  balls: IPoint[] = [];
  noBalls = 30;
  mouse: IPoint = { x: 0, y: 0 };

  constructor() {
  }

  ngAfterViewInit() {
    // Update the position of the mouse as the mouse moves around
    document.documentElement.onmousemove = (event) => this.updateMousePoint(event.x, event.y);

    // Setup the canvas width and height
    const ctx = this.setupCanvasContext();

    // Randomly generate a number of balls to be placed in the balls list
    this.getRandomBallPositions();

    this.draw(ctx);
    this.animate(ctx);
  }

  setupCanvasContext() {
    this.canvasElement.nativeElement.height = window.innerHeight;
    this.canvasElement.nativeElement.width = window.innerWidth;

    // Context of the canvas element
    return this.canvasElement.nativeElement.getContext('2d');
  }

  getRandomBallPositions() {
    for (let count = 0; count <= this.noBalls; count++) {
      const xMax = window.innerWidth;
      const yMax = window.innerHeight;

      this.balls.push({
        x: Math.random() * xMax,
        y: Math.random() * yMax,
        dy: (Math.random() - 0.5) * 2,
        dx: (Math.random() - 0.5) * 2 ,
        radius: Math.random() * 5 });
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw the balls
    for (const ball of this.balls) {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = '#FFF';
      ctx.strokeStyle = '#FFF';
      ctx.stroke();
      ctx.fill();
    }

    // Draw the lines connecting the balls
    ctx.beginPath();
    for (const ball of this.balls) {
      ctx.moveTo(ball.x, ball.y);
      for (const ball2 of this.balls) {
        if (this.getDistance(ball, ball2) <= 150) {
          ctx.lineTo(ball2.x, ball2.y);
        }
      }

      // Also draw lines between balls and mouse pointer
      if (this.getDistance(ball, this.mouse) <= 150) {
        ctx.moveTo(ball.x, ball.y);
        ctx.lineTo(this.mouse.x, this.mouse.y);
      }
    }
    ctx.stroke();
  }

  getDistance(ball1: IPoint, ball2: IPoint) {
    let dx = ball2.x - ball1.x;
    let dy = ball2.y - ball1.y;

    dx = dx * dx;
    dy = dy * dy;

    return Math.sqrt(dx + dy);
  }

  update(ctx: CanvasRenderingContext2D) {
    for (const ball of this.balls) {
      // Determine the direction the ball will be moving in
      if (ball.x < 0 || ball.y > window.innerWidth) {
        ball.dx = ball.dx * -1;
      }

      if (ball.y < 0 || ball.y > window.innerHeight) {
        ball.dy = ball.dy * -1;
      }

      ball.x += ball.dx;
      ball.y += ball.dy;
    }

    this.draw(ctx);
  }

  animate(ctx: CanvasRenderingContext2D) {
    requestAnimationFrame(() => this.animate(ctx));
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.update(ctx);
  }

  updateMousePoint(x, y) {
    this.mouse.x = x;
    this.mouse.y = y;
  }
}
