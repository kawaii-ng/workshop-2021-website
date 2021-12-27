import dogCatModelImg from '../images/cat-dog-model.PNG'
import amongUsImg from '../images/among-us.PNG'
import theChageGameImg from '../images/make-change.PNG'
import musicGameImg from '../images/music-game.PNG'
import flappyBirdImg from '../images/flappy-bird.PNG'
import beatMonsterImg from '../images/beat-ghost.PNG'
import changeDemo from '../images/demo-change.gif'
import TeachableInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/TeachableInstruction/TeachableInstruction'
import MusicInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/MusicInstruction/MusicInstruction'
import ChangeInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/ChangeInstruction/ChangeInstruction'
import FlappyInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/FlappyInstruction/FlappyInstruction'

const tmData = {

    id: 'dog-cat-modal',
    name: "貓和狗訓練模型",
    imgUrl: dogCatModelImg,
    demo: {

        frame: <img src={dogCatModelImg} />,
        instruction: <TeachableInstruction/>,
        material: "teachable-machine-material/"
    
    }, 
    submitDate: 28,
    sectionList: ["練習內容", "上載截圖"],
    firstPath: 'demo',
    ide: 'Teachable Machine'

}

const musicGameData = {

    id: 'music-game',
    name: "音樂遊戲",
    imgUrl: musicGameImg,
    demo: {

        url: "https://scratch.mit.edu/projects/615270427",
        frame: <iframe src="https://scratch.mit.edu/projects/615270427/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <MusicInstruction/>,
        material: ""
    
    }, 
    submitDate: 28,
    sectionList: ["實作試玩", "上載截圖"],
    firstPath: 'demo',
    ide: 'Scratch'

}

const amongUsData = {

    id: 'among-us',
    name: "大空狼人殺",
    imgUrl: amongUsImg,
    demo: null, 
    submitDate: 29,
    sectionList: ["上載截圖"],
    firstPath: 'submit',
    ide: 'Scratch'

}

const beatMonsterData = {

    id: 'beat-monster',
    name: '打地鼠',
    imgUrl: beatMonsterImg,
    demo: {

        url: "https://scratch.mit.edu/projects/621655568",
        frame: <iframe src="https://scratch.mit.edu/projects/621655568/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <ol>
                        <li>點擊怪獸來擊退它</li>
                    </ol>,
        material: ""

    },
    submitDate: 29,
    sectionList: ["實作示範", "上載截圖"],
    firstPath: 'demo',
    ide: 'Scratch'

}

const theChangeGameData = {

    id: 'the-change',
    name: '找續遊戲',
    imgUrl: theChageGameImg,
    demo: {

        frame: <img width="100%" height="100%" src={changeDemo} />,
        instruction: <ChangeInstruction/>,
        material: "the-change-material/"

    },
    submitDate: 29,
    sectionList: ["實作示範", "上載截圖"],
    firstPath: 'demo',
    ide: 'Codelab Adapter'

}

const flappyBirdData = {

    id: 'flappy-bird',
    name: 'Flappy Bird',
    imgUrl: flappyBirdImg,
    demo: {

        url: "https://scratch.mit.edu/projects/616097376",
        frame: <iframe src="https://scratch.mit.edu/projects/616097376/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <FlappyInstruction/>,
        material: "flappy-bird-material/"
    
    }, 
    submitDate: 29,
    sectionList: ["實作試玩", "上載截圖"],
    firstPath: 'demo',
    ide: 'Scratch'

}

export const gameDataList = [

    tmData, musicGameData, amongUsData, beatMonsterData, theChangeGameData, flappyBirdData

]