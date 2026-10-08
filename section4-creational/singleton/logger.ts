class Logger {
  private static logger: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.logger) {
      Logger.logger = new Logger();
    }

    return Logger.logger;
  }

  private getPrefix(): string {
    const timestamp = new Date().toLocaleString();
    return `[${timestamp}]`;
  }

  log(msg: string): void {
    console.log(this.getPrefix(), msg);
  }

  error(msg: string): void {
    console.error(this.getPrefix(), msg);
  }
}

const l = Logger.getInstance();
l.log("This is a log message.");
l.error("This is an error message.");
