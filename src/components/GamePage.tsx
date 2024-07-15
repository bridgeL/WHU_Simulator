// import { FC } from "react";
// import FriendsList from "@/components/FriendsList";
// import { Friend, Whuer } from "@/components/types";

// interface GamePageProps {
//     whuer: Whuer;
//     year: number;
//     month: number;
//     setPage: (page: string) => void;
//     friends: Friend[];
//     setFriends: (friends: Friend[]) => void;
//     setYear: (year: number) => void;
//     setMonth: (month: number) => void;
//     joinedClubs: boolean;
//     setJoinedClubs: (joined: boolean) => void;
// }

// const GamePage: FC<GamePageProps> = ({
//     whuer,
//     year,
//     month,
//     setPage,
//     friends,
//     setFriends,
//     setYear,
//     setMonth,
//     joinedClubs,
//     setJoinedClubs,
// }) => {
//     const nextMonth = () => {
//         setMonth(month + 1);
//         if (month > 12) {
//             setMonth(1);
//             setYear(year + 1);
//         }
//     };

//     const handleLibrary = () => {
//         whuer.changeAttr("学识", 1);
//         if (Math.random() < 0.4) {
//             const friend = friends.find((f) => f.name === "陈梓健");
//             if (friend) friend.favorability += 2;
//             alert("好巧！陈梓健学长也在图书馆，你向他请教了问题");
//         } else {
//             alert("又学习了一些知识呢。");
//         }
//     };

//     const handleRunning = () => {
//         whuer.changeAttr("体魄", 1);
//         if (Math.random() < 0.5) {
//             const friend = friends.find((f) => f.name === "方羽老师");
//             if (!friend) {
//                 const newFriend = { name: "方羽老师", favorability: 2 };
//                 setFriends([...friends, newFriend]);
//                 alert("你跑步的时候遇到了方羽老师，第一次主动跟她打了招呼");
//             } else {
//                 friend.favorability += 1;
//                 alert("好巧！方羽老师也在跑步！你们一起跑了一段");
//             }
//         } else {
//             alert("跑步真爽。");
//         }
//     };

//     const handleDating = () => {
//         const friendNames = friends.map((friend) => friend.name);
//         const choice = prompt("你要邀请谁一起玩", friendNames.join(", "));
//         if (choice) {
//             const selectedFriend = friends.find(
//                 (friend) => friend.name === choice
//             );
//             if (selectedFriend) {
//                 selectedFriend.favorability += 20;
//                 alert(`你和${choice}在创意城一起吃饭，关系又变好了。`);
//             }
//         }
//     };

//     const handleDormitory = () => {
//         whuer.changeAttr("段位", 1);
//         const friend = friends.find((friend) => friend.name === "猫猫星");
//         if (!friend) {
//             const newFriend = { name: "猫猫星", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你结识了室友猫猫星");
//         } else {
//             friend.favorability += 2;
//             alert("你又和室友猫猫星一起上分了");
//         }
//     };

//     const handleSakura = () => {
//         const friend = friends.find((friend) => friend.name === "晗姐");
//         if (!friend) {
//             const newFriend = { name: "晗姐", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你结识了晗姐");
//         } else {
//             friend.favorability += 2;
//             alert("你遇到晗姐了，她也来看樱花");
//         }
//     };

//     const handleOldLib = () => {
//         const friend = friends.find((friend) => friend.name === "新阳");
//         if (!friend) {
//             const newFriend = { name: "新阳", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你结识了新阳");
//         } else {
//             friend.favorability += 2;
//             alert("你又碰到了新阳");
//         }
//     };

//     const handleSports = () => {
//         const friend = friends.find((friend) => friend.name === "胡卜");
//         if (!friend) {
//             const newFriend = { name: "胡卜", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你结识了运动系学弟胡卜");
//         } else {
//             friend.favorability += 2;
//             alert("你又碰到了学弟胡卜");
//         }
//     };

//     const handleClubJoining = () => {
//         setJoinedClubs(true);
//         alert("好多社团，真有意思。");
//     };

//     const handleBoardGames = () => {
//         alert("你参加了【桌游社】的狼人杀/阿瓦隆活动。");
//     };

//     const handleAnimeClub = () => {
//         const friend = friends.find((friend) => friend.name === "张寒紫琼");
//         if (!friend) {
//             const newFriend = { name: "张寒紫琼", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你在动漫社的活动中遇到了张寒紫琼。");
//         } else {
//             friend.favorability += 2;
//             alert("你又和张寒紫琼一起cosplay了！");
//         }
//     };

//     const handleBadmintonClub = () => {
//         const friend = friends.find((friend) => friend.name === "胡卜");
//         if (!friend) {
//             const newFriend = { name: "胡卜", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你在羽毛球社的活动中遇到了胡卜。");
//         } else {
//             friend.favorability += 2;
//             alert("你又和胡卜一起打球了！");
//         }
//     };

//     const handleGoldenAutumn = () => {
//         const directions = ["金秋服饰", "金秋合唱", "金秋情景剧", "金秋辩论"];
//         const result = prompt("你对哪个活动感兴趣", directions.join(", "));
//         const friend = friends.find((friend) => friend.name === "晗姐");
//         if (!friend) {
//             const newFriend = { name: "晗姐", favorability: 5 };
//             setFriends([...friends, newFriend]);
//             alert("你第一次看金秋，结识了晗姐");
//         } else {
//             friend.favorability += 2;
//             alert("你发现晗姐也在这里");
//         }
//     };

//     const handleOptionClick = (option: {
//         name: string;
//         action: () => void;
//     }) => {
//         option.action();
//         nextMonth();
//         if (year === 2092 && month === 6) {
//             setYear(2088);
//             setPage("graduation");
//         } else {
//             setPage("game");
//         }
//     };

//     const options = [
//         { name: "【总图】温习功课", action: handleLibrary },
//         { name: "【信操】跑步", action: handleRunning },
//         { name: "【寝室】睡觉", action: () => whuer.changeAttr("精力", 20) },
//         { name: "【寝室】打游戏", action: handleDormitory },
//     ];
//     if (year > 2088) {
//         options.push({ name: "【创意城】约会", action: handleDating });
//     }
//     if (month === 3 || month === 4) {
//         options.push({ name: "【樱花大道】赏樱", action: handleSakura });
//     }
//     if (month === 6) {
//         options.push({ name: "【老图】亮灯", action: handleOldLib });
//     }
//     if (month === 9) {
//         options.push({ name: "【奥场】运动会", action: handleSports });
//     }
//     if (month === 10 && !joinedClubs) {
//         options.push({ name: "！百团大战！", action: handleClubJoining });
//     }
//     if (month === 11) {
//         options.push({ name: "！金秋艺术节！", action: handleGoldenAutumn });
//     }
//     if (joinedClubs) {
//         options.push(
//             { name: "【桌游社】狼人杀/阿瓦隆", action: handleBoardGames },
//             { name: "【动漫社】社团活动", action: handleAnimeClub },
//             { name: "【羽毛球社】打羽毛球", action: handleBadmintonClub }
//         );
//     }

//     return (
//         <div style={{ textAlign: "center", margin: "20px" }}>
//             <h2>
//                 {year}年{month}月
//             </h2>
//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     gap: "10px",
//                 }}
//             >
//                 {options.map((option) => (
//                     <button
//                         key={option.name}
//                         onClick={() => handleOptionClick(option)}
//                         style={{ padding: "10px 20px" }}
//                     >
//                         {option.name}
//                     </button>
//                 ))}
//             </div>
//             <FriendsList friends={whuer.friends} />
//         </div>
//     );
// };

// export default GamePage;
