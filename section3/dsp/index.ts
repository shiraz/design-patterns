interface IDb {
  save(data: string): void;
}

class DB implements IDb {
  save(data: string): void {
    console.log(`Saving data: ${data} to DB`);
  }
}

class MongoDB implements IDb {
  save(data: string): void {
    console.log(`Saving data: ${data} to MongoDB`);
  }
}

class HighestLevelModule {
  constructor(private db: IDb) {}

  execute(data: string): void {
    this.db.save(data);
  }
}

const sqlDb : DB = new DB();
const mongoDb : MongoDB = new MongoDB();

const user: HighestLevelModule = new HighestLevelModule(sqlDb);
const admin: HighestLevelModule = new HighestLevelModule(mongoDb);

user.execute("User data");
admin.execute("Admin data");
