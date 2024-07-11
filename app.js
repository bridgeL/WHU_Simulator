class Game {
    constructor() {
        this.whuer = new WHUer({
            name: "susan",
            major: "弘毅学堂",
            talents: [
                {
                    name: "家境",
                    value: 100,
                },
                {
                    name: "智力",
                    value: 100,
                },
            ],
        });
        this.placeManager = new PlaceManager({
            places: [
                new Place({
                    name: "武汉大学",
                    root: true,
                    options: [
                        new PlaceOptionPlace({
                            name: "信息学部",
                        }),
                        new PlaceOptionPlace({
                            name: "总部",
                        }),
                    ],
                }),
                new Place({
                    name: "信息学部",
                    options: [
                        new PlaceOptionPlace({
                            name: "创意城",
                            desc: "约会",
                        }),
                        new PlaceOptionActivity({
                            name: "信图学习",
                            power: 2,
                            effects: [
                                {
                                    name: "功课",
                                    diff: 1,
                                },
                                {
                                    name: "学识",
                                    diff: 20,
                                },
                            ],
                        }),
                    ],
                }),
                new Place({
                    name: "创意城",
                    desc: "今天和谁一起玩呢",
                    options: [
                        new PlaceOptionActivity({
                            name: "夜猫星",
                            hide: true,
                            power: 2,
                            effects: [
                                {
                                    name: "学识",
                                    diff: 20,
                                },
                            ],
                        }),
                    ],
                }),
            ],
        });
        this.placeManager.setPlace("武汉大学");

        // debug
        root.append(this.whuer.el);
        root.append(this.placeManager.el);
    }
}

class Utils {
    static createEl(params = {}) {
        const {
            tag = "div",
            className = null,
            id = null,
            innerHTML = null,
            onclick = null,
            nodes = null,
            style = null,
        } = params;

        let el = document.createElement(tag);
        if (className != null) el.className = className;
        if (id != null) el.id = id;
        if (innerHTML != null) el.innerHTML = innerHTML;
        if (onclick != null) el.onclick = onclick;
        if (nodes != null) el.append(...nodes);
        if (style != null) Object.assign(el.style, style);
        return el;
    }
}

class WHUerAttr {
    constructor(params) {
        const { name, value } = params;
        this.name = name;
        this.value = value;
        this.listeners = [];
        this.el = Utils.createEl({});
        this.update();
    }

    update() {
        this.el.innerHTML = `${this.name}: ${this.value}`;
    }

    change(diff) {
        const oldValue = this.value;
        this.value += diff;
        this.update();
        this.listeners.forEach((listener) => listener(this.value, oldValue));
    }

    addListener(listener) {
        this.listeners.push(listener);
    }
}

class WHUer {
    constructor(params) {
        const { name, major, talents } = params;
        this.name = name;
        this.major = major;
        this.talents = talents;
        this.attrs = [
            new WHUerAttr({
                name: "功课",
                value: 0,
            }),
            new WHUerAttr({
                name: "艺术",
                value: 100,
            }),
            new WHUerAttr({
                name: "学识",
                value: 100,
            }),
            new WHUerAttr({
                name: "情商",
                value: 100,
            }),
            new WHUerAttr({
                name: "体力",
                value: 30,
            }),
        ];
        this.el = Utils.createEl({
            nodes: this.attrs.map((attr) => attr.el),
        });

        this.getAttr("学识").addListener((value) => {
            if (value > 110)
                game.placeManager
                    .getPlace("创意城")
                    .getOption("夜猫星")
                    .unHide();
        });
    }

    getAttr(name) {
        const results = this.attrs.filter((attr) => attr.name === name);
        if (results.length < 1) {
            console.log("(WHUerAttr, " + name + ") doesn't exist!");
            return;
        }
        return results[0];
    }

    changeAttr(name, diff) {
        this.getAttr(name)?.change(diff);
    }
}

class PlaceManager {
    constructor(params) {
        const { places } = params;
        this.places = places;
        this.previousPlaces = [];
        this.place = null;
        this.el = Utils.createEl();
    }

    returnToLastPlace() {
        if (this.previousPlaces.length < 1) {
            console.log("无法回退到更早");
            return;
        }
        this.place = this.previousPlaces.pop();
        this.el.innerHTML = "";
        this.el.append(this.place.el);
    }

    getPlace(name) {
        const results = this.places.filter((place) => place.name === name);
        if (results.length < 1) {
            console.log("(Place, " + name + ") doesn't exist!");
            return;
        }
        return results[0];
    }



    setPlace(name) {
        const place = this.getPlace(name);
        if (!place) return;
        if (this.place) this.previousPlaces.push(this.place);
        this.place = place;

        this.el.innerHTML = "";
        this.el.append(place.el);
    }
}

class Place {
    constructor(params) {
        const { name, options, root = false, desc = "" } = params;
        this.name = name;
        this.root = root;
        this.desc = desc;
        this.options = options;

        const nodes = [];

        nodes.push(
            Utils.createEl({
                innerHTML: name,
                style: {
                    padding: "6px",
                    fontWeight: "bold",
                    fontSize: "20px",
                },
            })
        );

        if (desc)
            nodes.push(
                Utils.createEl({
                    innerHTML: desc,
                    style: {
                        padding: "6px",
                        paddingTop: 0,
                    },
                })
            );

        nodes.push(...options.map((option) => option.el));

        if (!root)
            nodes.push(
                Utils.createEl({
                    innerHTML: "返回",
                    style: {
                        border: "1px solid black",
                        padding: "5px",
                        margin: "2px 0",
                        borderRadius: "3px",
                        backgroundColor: "lightgray",
                    },
                    onclick: () => {
                        game.placeManager.returnToLastPlace();
                    },
                })
            );

        this.el = Utils.createEl({
            nodes: nodes,
        });
    }

    getOption(name) {
        const results = this.options.filter((option) => option.name === name);
        if (results.length < 1) {
            console.log("(PlaceOption, " + name + ") doesn't exist");
            return;
        }
        return results[0];
    }
}

class PlaceOptionPlace {
    constructor(params) {
        const { name, desc = "" } = params;
        this.name = name;
        this.desc = desc;
        this.el = Utils.createEl({
            innerHTML: `${name} <i>${desc}</i>`,
            style: {
                border: "1px solid black",
                padding: "5px",
                margin: "2px 0",
                borderRadius: "3px",
                backgroundColor: "lightblue",
            },
            onclick: () => {
                game.placeManager.setPlace(name);
            },
        });
    }
}

class PlaceOptionActivity {
    constructor(params) {
        const { name, effects, power, hide = false } = params;
        this.name = name;
        this.hide = hide;
        this.effects = effects;
        this.power = power;
        this.el = Utils.createEl({
            innerHTML: name,
            style: {
                border: "1px solid black",
                padding: "5px",
                margin: "2px 0",
                display: hide ? "none" : "",
                borderRadius: "3px",
                backgroundColor: "orange",
            },
            onclick: () => {
                const attr = game.whuer.getAttr("体力");
                if (attr.value < power) {
                    console.log("没有足够的体力");
                    return;
                }
                attr.change(-power);
                effects.forEach((effect) => {
                    game.whuer.changeAttr(effect.name, effect.diff);
                });
            },
        });
    }

    unHide() {
        this.hide = false;
        this.el.style.display = "";
    }
}

const game = new Game();
