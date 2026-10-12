interface Storable {
    readonly id: number;
    save(): string;
    update(data: string): string;
}

class UserAccount implements Storable {
    readonly id: number;
    public name: string;
    private score: number;
    private static totalUsers: number = 0;

    constructor(id: number, name: string, score: number) {
        this.id = id;
        this.name = name;
        this.score = this.validateScore(score);
        UserAccount.totalUsers++;
    }

    private validateScore(score: number): number {
        if (score < 0 || score > 100) {
            throw new Error("Invalid score");
        }
        return score;
    }

    save(): string {
        return `User ${this.name} saved.`;
    }

    update(data: string): string {
        this.name = data;
        return `User updated to ${this.name}.`;
    }

    get userScore(): number {
        return this.score;
    }

    static getCounter(): number {
        return UserAccount.totalUsers;
    }

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setScore(score: number): this {
        this.score = this.validateScore(score);
        return this;
    }

    logDetails(): this {
        console.log(`User: ${this.name}, Score: ${this.score}`);
        return this;
    }
}


// Inheritance.
class PremiumUser extends UserAccount {
    membershipLevel: string;

    constructor(
        id: number,
        name: string,
        score: number,
        membershipLevel: string
    ) {
        super(id, name, score);
        this.membershipLevel = membershipLevel;
    }

    override save(): string {
        return `${super.save()} [Premium: ${this.membershipLevel}]`;
    }
}


// Testing.
const user1 = new UserAccount(1, "Mohamed", 90);
user1.setName("Mohamed Barakat").setScore(95).logDetails();

const premiumUser = new PremiumUser(2, "Ali", 85, "Gold");

const storableItems: Storable[] = [user1, premiumUser];

storableItems.forEach(item => {
    console.log(item.save());

    if (item instanceof PremiumUser) {
        console.log(item.membershipLevel);
    }
});

console.log(UserAccount.getCounter());


// Errors:
// user1.id = 10;       
// console.log(user1.score); // private field.
// Removing save() causes an implements error.
// Interfaces cannot be used with instanceof.
