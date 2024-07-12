class Game {
    constructor() {
        this.currentYear = 1;
        this.currentMonth = 9; // 学年从9月开始
        this.whuer = null;
        this.friends = [];
        this.city = '';
        this.renderWelcomePage();
    }

    renderWelcomePage() {
        const root = document.getElementById('root');
        root.innerHTML = '';
        const welcomeText = Utils.createEl({
            innerHTML: '欢迎来到-武大模拟器demo版，请开启你的人生',
            style: { fontSize: '48px', textAlign: 'center', margin: '20px' }
        });
        const startButton = Utils.createEl({
            tag: 'button',
            innerHTML: '开始',
            style: { display: 'block', margin: '20px auto', padding: '10px 20px' },
            onclick: () => this.renderCityPage()
        });
        root.append(welcomeText, startButton);
    }

    renderCityPage() {
        const cities = ['北京', '上海', '广州', '深圳', '武汉'];
        const randomIndex = Math.floor(Math.random() * cities.length);
        this.city = cities[randomIndex];

        const root = document.getElementById('root');
        root.innerHTML = '';
        const cityText = Utils.createEl({
            innerHTML: `你出生在${this.city}，家境优渥，开开心心度过了人生的前18年，要步入大学了，你成绩不错，高考稳定发挥，获得了565分的好成绩！`,
            style: { fontSize: '24px', textAlign: 'center', margin: '20px' }
        });

        const nextButton = Utils.createEl({
            tag: 'button',
            innerHTML: '报志愿',
            style: { display: 'block', margin: '20px auto', padding: '10px 20px' },
            onclick: () => this.renderUniversitySelectionPage()
        });
        root.append(cityText, nextButton);
    }
    
    renderUniversitySelectionPage() {
        const root = document.getElementById('root');
        root.innerHTML = '';
        const questionText = Utils.createEl({
            innerHTML: '请选择你的大学和专业',
            style: { fontSize: '24px', textAlign: 'center', margin: '20px' }
        });
    
        const universities = [
            { name: '北京大学', majors: ['天体物理', '理论与应用力学'] },
            { name: '武汉大学', majors: ['计算机', '电信', '英语'] },
            { name: '佳丽顿大学', majors: ['睡觉科学', '摆烂学', '糊弄学'] }
        ];
    
        const universitySelect = Utils.createEl({
            tag: 'select',
            id: 'universitySelect',
            style: { display: 'block', margin: '10px auto', padding: '5px' }
        });
        universities.forEach(university => {
            const option = document.createElement('option');
            option.value = university.name;
            option.innerHTML = university.name;
            universitySelect.appendChild(option);
        });
    
        const majorSelect = Utils.createEl({
            tag: 'select',
            id: 'majorSelect',
            style: { display: 'block', margin: '10px auto', padding: '5px' }
        });
    
        universitySelect.onchange = () => {
            const selectedUniversity = universities.find(university => university.name === universitySelect.value);
            majorSelect.innerHTML = '';
            selectedUniversity.majors.forEach(major => {
                const option = document.createElement('option');
                option.value = major;
                option.innerHTML = major;
                majorSelect.appendChild(option);
            });
        };
    
        universitySelect.onchange();
    
        const submitButton = Utils.createEl({
            tag: 'button',
            innerHTML: '确定',
            style: { display: 'block', margin: '20px auto', padding: '10px 20px' },
            onclick: () => {
                const university = universitySelect.value;
                const major = majorSelect.value;
    
                if (university === '北京大学') {
                    if (confirm('你的分数可能进不了北京大学哦，不如看看平替吧')) {
                        // 返回选择界面
                        this.renderUniversitySelectionPage();
                    } else {
                        // 落榜，重新开始游戏
                        alert('很遗憾，你落榜了！');
                        this.renderWelcomePage();
                    }
                } else if (university === '佳丽顿大学') {
                    if (confirm('你的水平完全可以去更好的学校啊，真的不后悔吗？')) {
                        // 返回选择界面
                        this.renderUniversitySelectionPage();
                    } else {
                        // 被录取进佳丽顿大学并发现学校倒闭
                        alert('恭喜你，被录取进佳丽顿大学！');
                        alert('去上学的时候发现学校倒闭了');
                        this.renderWelcomePage();
                    }
                } else {
                    // 其他正常选择
                    this.whuer = new WHUer({ name: '学生', major, university });
                    this.renderGamePage();
                }
            }
        });
    
        root.append(questionText, universitySelect, majorSelect, submitButton);
    }
    
    renderGamePage() {
        const root = document.getElementById('root');
        root.innerHTML = '';

        const header = Utils.createEl({
            innerHTML: `第${this.currentYear}年${this.currentMonth}月`,
            style: { fontSize: '24px', textAlign: 'center', margin: '20px' }
        });

        const optionsContainer = Utils.createEl({
            style: { display: 'flex', justifyContent: 'center', gap: '10px' }
        });

        const options = [
            { name: '图书馆', action: () => this.whuer.changeAttr('学习', 1) },
            { name: '操场', action: () => this.whuer.changeAttr('运动', 1) },
            { name: '寝室', action: () => this.handleDormitory() }
        ];

        if (this.currentMonth === 3) {
            options.push({ name: '樱花', action: () => this.handleSakura() });
        }

        options.forEach(option => {
            const button = Utils.createEl({
                tag: 'button',
                innerHTML: option.name,
                style: { padding: '10px 20px' },
                onclick: () => {
                    option.action();
                    this.nextMonth();
                    if (this.currentYear === 5 && this.currentMonth === 6) {
                        this.renderGraduationPage();
                    } else {
                        this.renderGamePage();
                    }
                }
            });
            optionsContainer.appendChild(button);
        });

        const friendsContainer = this.renderFriendsList();

        root.append(header, optionsContainer, friendsContainer);
    }

    nextMonth() {
        this.currentMonth += 1;
        if (this.currentMonth > 12) {
            this.currentMonth = 1;
            this.currentYear += 1;
        }
    }

    handleDormitory() {
        this.whuer.changeAttr('休息', 1);
        if (!this.friends.find(friend => friend.name === '猫猫星')) {
            const friend = { name: '猫猫星', favorability: 5 };
            this.friends.push(friend);
            alert('你结识了室友猫猫星');
        } else {
            const friend = this.friends.find(friend => friend.name === '猫猫星');
            friend.favorability += 2;
        }
    }

    handleSakura() {
        if (!this.friends.find(friend => friend.name === '新阳')) {
            const friend = { name: '新阳', favorability: 5 };
            this.friends.push(friend);
            alert('你结识了新阳');
        }
    }

    renderFriendsList() {
        const friendsContainer = Utils.createEl({
            style: { marginTop: '20px' }
        });
        const friendsTitle = Utils.createEl({
            innerHTML: '朋友列表',
            style: { fontSize: '18px', textAlign: 'center', margin: '10px' }
        });
        friendsContainer.appendChild(friendsTitle);

        this.friends.forEach(friend => {
            const friendEl = Utils.createEl({
                innerHTML: `${friend.name}: 好感度 ${friend.favorability}`,
                style: { textAlign: 'center', margin: '5px' }
            });
            friendsContainer.appendChild(friendEl);
        });

        return friendsContainer;
    }

    renderGraduationPage() {
        const root = document.getElementById('root');
        root.innerHTML = '';
        const congratsText = Utils.createEl({
            innerHTML: '恭喜你，毕业了',
            style: { fontSize: '36px', textAlign: 'center', margin: '20px' }
        });

        const summaryText = Utils.createEl({
            innerHTML: '你的毕业总结：',
            style: { fontSize: '24px', textAlign: 'center', margin: '20px' }
        });

        const results = [];
        if (this.whuer.attrs['学习'] > 24) {
            results.push('获得优秀学生奖学金');
        }
        if (this.whuer.attrs['运动'] > 24) {
            results.push('运动健将');
        }

        results.forEach(result => {
            const resultEl = Utils.createEl({
                innerHTML: result,
                style: { fontSize: '24px', textAlign: 'center', margin: '10px' }
            });
            root.appendChild(resultEl);
        });

        const confirmButton = Utils.createEl({
            tag: 'button',
            innerHTML: '确定',
            style: { display: 'block', margin: '20px auto', padding: '10px 20px' },
            onclick: () => this.renderWelcomePage()
        });

        root.append(congratsText, summaryText, confirmButton);
    }
}

class Utils {
    static createEl(params = {}) {
        const {
            tag = 'div',
            className = null,
            id = null,
            innerHTML = null,
            onclick = null,
            nodes = null,
            style = null
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

class WHUer {
    constructor(params) {
        const { name, major, university } = params;
        this.name = name;
        this.major = major;
        this.university = university;
        this.attrs = {
            '学习': 0,
            '运动': 0,
            '休息': 0
        };
        this.renderAttributes();
    }

    renderAttributes() {
        const root = document.getElementById('attributes');
        root.innerHTML = '';
        Object.keys(this.attrs).forEach(key => {
            const attrEl = Utils.createEl({
                innerHTML: `${key}: ${this.attrs[key]}`,
                style: { margin: '5px 0' }
            });
            root.appendChild(attrEl);
        });
    }

    changeAttr(name, diff) {
        if (this.attrs.hasOwnProperty(name)) {
            this.attrs[name] += diff;
            this.renderAttributes();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});
