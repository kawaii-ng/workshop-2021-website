import dogCatModelImg from '../images/cat-dog-model.PNG'
import amongUsImg from '../images/among-us.PNG'
import makeChageGameImg from '../images/make-change.PNG'
import musicGameImg from '../images/music-game.PNG'
import flappyBirdImg from '../images/flappy-bird.PNG'
import changeDemo from '../images/demo-change.gif'
import MusicInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/MusicInstruction/MusicInstruction'
import ChangeInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/ChangeInstruction/ChangeInstruction'
import FlappyInstruction from '../pages/WorkshopPage/WorkshopLayout/DemoLayout/InstructionLayout/FlappyInstruction/FlappyInstruction'

const tmData = {

    id: 'dog-cat-modal',
    name: "貓和狗訓練模型",
    imgUrl: dogCatModelImg,
    demo: null, 
    submitDate: 28,
    sectionList: ["遞交專案"],
    firstPath: 'submit',
    ide: 'Teachable Machine'

}

const musicGameData = {

    id: 'music-game',
    name: "音樂遊戲",
    imgUrl: musicGameImg,
    demo: {

        scratchUrl: <iframe src="https://scratch.mit.edu/projects/615270427/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <MusicInstruction/>,
        material: ""
    
    }, 
    submitDate: 28,
    sectionList: ["實作試玩", "遞交專案"],
    firstPath: 'demo',
    ide: 'Scratch'

}

const amongUsData = {

    id: 'among-us',
    name: "大空狼人殺",
    imgUrl: amongUsImg,
    demo: null, 
    submitDate: 29,
    sectionList: ["遞交專案"],
    firstPath: 'submit',
    ide: 'Scratch'

}

const makeChangeGameData = {

    id: 'make-change',
    name: '找續遊戲',
    imgUrl: makeChageGameImg,
    demo: {

        scratchUrl: <img width="100%" height="100%" src={changeDemo} />,
        instruction: <ChangeInstruction/>,
        material: "make-change-material/"

    },
    submitDate: 29,
    sectionList: ["實作示範", "遞交專案"],
    firstPath: 'demo',
    ide: 'Codelab Adapter'

}

const flappyBirdData = {

    id: 'flappy-bird',
    name: '笨鳥先飛',
    imgUrl: flappyBirdImg,
    demo: {

        scratchUrl: <iframe src="https://scratch.mit.edu/projects/616097376/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <FlappyInstruction/>,
        material: "flappy-bird-material/"
    
    }, 
    submitDate: 29,
    sectionList: ["實作試玩", "遞交專案"],
    firstPath: 'demo',
    ide: 'Scratch'

}

export const gameDataList = [

    tmData, musicGameData, amongUsData, makeChangeGameData, flappyBirdData

]