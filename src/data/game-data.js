import makeChageGameImg from '../images/make-change.PNG'
import musicGameImg from '../images/music-game.PNG'
import flappyBirdImg from '../images/flappy-bird.PNG'

const musicGameData = {

    id: 'music-game',
    name: "音樂遊戲",
    imgUrl: musicGameImg,
    demo: {

        scratchUrl: <iframe src="https://scratch.mit.edu/projects/615270427/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <ol><li>按旗子自動播放小星星</li><li>點撃不同顏色的樂器以發出不同的音調</li></ol>,
        material: ""
    
    }, 
    submitDate: 28,
    ide: 'Scratch'

}

const makeChangeGameData = {

    id: 'make-change',
    name: '找續遊戲',
    imgUrl: makeChageGameImg,
    demo: {

        scratchUrl: <img width="100%" height="100%" src={makeChageGameImg} />,
        instruction: <ol><li>先選擇相應的紙幣以進行掃描</li><li>按空白鍵掃描</li><li>若找續款項正確，客人會滿意地離開</li><li>假若找續出錯，客人會不滿地離開</li></ol>,
        material: "make-change-material/"

    },
    submitDate: 29,
    ide: 'Codelab Adapter'

}

const flappyBirdData = {

    id: 'flappy-bird',
    name: '笨鳥先飛',
    imgUrl: flappyBirdImg,
    demo: {

        scratchUrl: <iframe src="https://scratch.mit.edu/projects/616097376/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        instruction: <ol><li>按空白揵跳躍</li><li>跳過水管便得分</li><li>碰到水管便挑戰失敗</li></ol>,
        material: "flappy-bird-material/"
    
    }, 
    submitDate: 29,
    ide: 'Scratch'

}

export const gameDataList = [

    musicGameData, makeChangeGameData, flappyBirdData

]