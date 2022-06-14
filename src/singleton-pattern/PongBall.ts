export class PongBall {
  private static ball: PongBall;
  private ballType: string | null = null;

  private constructor() {
    this.ballType = 'Fire Ball';
  }

  static getInstance(): PongBall {
    if (!PongBall.ball) {
      this.ball = new PongBall();
    }
    return this.ball;
  }

  getBallType() {
    return `I'm a ${this.ballType}`;
  }
}
