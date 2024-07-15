export interface OptionType {
    text: string;
    next: (whuer: Whuer) => number;
    condition?: (whuer: Whuer) => boolean;
}

export interface QuestionType {
    id: number;
    text: string;
    options: OptionType[];
}

export interface Friend {
    name: string;
    favorability: number;
}

export interface Attributes {
    学识: number;
    情商: number;
    体魄: number;
    精力: number;
    心情: number;
    钱: number;
    段位: number;
}

export interface GameTime {
    year: number;
    month: number;
    cnt: number;
}

export class Whuer {
    time: GameTime = {
        year: 2018,
        month: 9,
        cnt: 0,
    };
    name: string = "";
    major: string = "";
    university: string = "";
    attrs: Attributes = {
        学识: 20,
        情商: 20,
        体魄: 20,
        精力: 50,
        心情: 50,
        钱: 0,
        段位: 0,
    };
    friends: Friend[] = [];
    setWhuer: (whuer: Whuer) => void = () => {};
    joinedClubs = false;

    clone() {
        const whuer = new Whuer();
        whuer.name = this.name;
        whuer.major = this.major;
        whuer.university = this.university;
        whuer.attrs = this.attrs;
        whuer.friends = this.friends;
        whuer.time = this.time;
        whuer.setWhuer = this.setWhuer;
        whuer.joinedClubs = this.joinedClubs;
        return whuer;
    }

    nextMonth() {
        this.time.month += 1;
        this.time.cnt += 1;
        if (this.time.month > 12) {
            this.time.month -= 12;
            this.time.year += 1;
        }
    }

    update() {
        this.setWhuer(this.clone());
    }

    changeAttr(name: keyof Attributes, diff: number) {
        if (this.attrs.hasOwnProperty(name)) {
            this.attrs[name] += diff;
        }
    }

    isFriendWith(name: string) {
        return this.friends.filter((friend) => friend.name === name).length > 0;
    }

    makeFriendWith(name: string, favorability: number) {
        this.friends.push({
            name,
            favorability,
        });
    }

    updateFriendFavorability(name: string, amount: number) {
        const friend = this.friends.find((friend) => friend.name === name);
        if (friend) {
            friend.favorability += amount;
        }
    }
}
