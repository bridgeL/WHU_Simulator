import { QuestionType } from "@/components/types";

export const allQuestions: QuestionType[] = [
    {
        id: 1,
        text: "这个月打算干什么？",
        options: [
            {
                text: "【总图】温习功课",
                next: (whuer) => {
                    whuer.changeAttr("学识", 1);
                    if (Math.random() < 0.4) {
                        if (!whuer.isFriendWith("陈梓健")) {
                            whuer.makeFriendWith("陈梓健", 2);
                            alert(
                                "好巧！陈梓健学长也在图书馆，你向他请教了问题"
                            );
                        }
                    } else {
                        alert("又学习了一些知识呢。");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "【创意城】吃饭",
                next: () => 2,
            },
            {
                text: "【信操】跑步",
                next: (whuer) => {
                    whuer.changeAttr("体魄", 1);
                    if (Math.random() < 0.5) {
                        if (!whuer.isFriendWith("方羽老师")) {
                            whuer.makeFriendWith("方羽老师", 2);
                            alert(
                                "你跑步的时候遇到了方羽老师，第一次主动跟她打了招呼"
                            );
                        } else {
                            whuer.addFriendFavorability("方羽老师", 1);
                            alert("好巧！方羽老师也在跑步！你们一起跑了一段");
                        }
                    } else {
                        alert("跑步真爽。");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "【寝室】睡觉",
                next: (whuer) => {
                    whuer.changeAttr("精力", 20);
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "【寝室】打游戏",
                next: (whuer) => {
                    whuer.changeAttr("段位", 1);
                    if (!whuer.isFriendWith("猫猫星")) {
                        whuer.makeFriendWith("猫猫星", 5);
                        alert("你结识了室友猫猫星");
                    } else {
                        whuer.addFriendFavorability("猫猫星", 2);
                        alert("你又和室友猫猫星一起上分了");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "【樱花大道】赏樱",
                next: (whuer) => {
                    if (!whuer.isFriendWith("晗姐")) {
                        whuer.makeFriendWith("晗姐", 5);
                        alert("你结识了晗姐");
                    } else {
                        whuer.addFriendFavorability("晗姐", 2);
                        alert("你遇到晗姐了，她也来看樱花");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "【老图】亮灯",
                next: (whuer) => {
                    if (!whuer.isFriendWith("新阳")) {
                        whuer.makeFriendWith("新阳", 5);
                        alert("你结识了新阳");
                    } else {
                        whuer.addFriendFavorability("新阳", 2);
                        alert("你又碰到了新阳");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "【奥场】运动会",
                next: (whuer) => {
                    if (!whuer.isFriendWith("胡卜")) {
                        whuer.makeFriendWith("胡卜", 5);
                        alert("你结识了运动系学弟胡卜");
                    } else {
                        whuer.addFriendFavorability("胡卜", 2);
                        alert("你又碰到了学弟胡卜");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
            },
            {
                text: "！百团大战！",
                next: (whuer) => {
                    whuer.joinedClubs = true;
                    alert("好多社团，真有意思。");
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: (whuer) =>
                    whuer.time.month === 10 && !whuer.joinedClubs,
            },
            {
                text: "！金秋艺术节！",
                next: (whuer) => {
                    const directions = [
                        "金秋服饰",
                        "金秋合唱",
                        "金秋情景剧",
                        "金秋辩论",
                    ];
                    const result = prompt(
                        "你对哪个活动感兴趣",
                        directions.join(", ")
                    );
                    if (!whuer.isFriendWith("晗姐")) {
                        whuer.makeFriendWith("晗姐", 5);
                        alert("你第一次看金秋，结识了晗姐");
                    } else {
                        whuer.addFriendFavorability("晗姐", 2);
                        alert("你发现晗姐也在这里");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: (whuer) => whuer.time.month === 11,
            },
            {
                text: "【桌游社】狼人杀/阿瓦隆",
                next: (whuer) => {
                    alert("你参加了【桌游社】的狼人杀/阿瓦隆活动。");
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: (whuer) => whuer.joinedClubs,
            },
            {
                text: "【动漫社】社团活动",
                next: (whuer) => {
                    if (!whuer.isFriendWith("张寒紫琼")) {
                        whuer.makeFriendWith("张寒紫琼", 5);
                        alert("你在动漫社的活动中遇到了张寒紫琼。");
                    } else {
                        whuer.addFriendFavorability("张寒紫琼", 2);
                        alert("你又和张寒紫琼一起cosplay了！");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: (whuer) => whuer.joinedClubs,
            },
            {
                text: "【羽毛球社】打羽毛球",
                next: (whuer) => {
                    if (!whuer.isFriendWith("胡卜")) {
                        whuer.makeFriendWith("胡卜", 5);
                        alert("你在羽毛球社的活动中遇到了胡卜。");
                    } else {
                        whuer.addFriendFavorability("胡卜", 2);
                        alert("你又和胡卜一起打球了！");
                    }
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: (whuer) => whuer.joinedClubs,
            },
        ],
    },
    {
        id: 2,
        text: "你要邀请谁一起玩？",
        options: [
            {
                text: "猫猫星",
                next: (whuer) => {
                    whuer.addFriendFavorability("猫猫星", 5);
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: (whuer) => whuer.isFriendWith("猫猫星"),
            },
            {
                text: "一个人吃饭",
                next: (whuer) => {
                    whuer.nextMonth();
                    whuer.update();
                    return 1;
                },
                condition: () => true,
            },
            {
                text: "算了",
                next: () => 1,
                condition: () => true,
            },
        ],
    },
];
