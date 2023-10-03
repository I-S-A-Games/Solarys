export default class gameover extends Phaser.Scene {
    constructor () {
        super('gameover')
    }

    preload () {
        this.load.spritesheet('fim', '../assets/telamorte.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
        this.load.spritesheet('botaoinvisivelH', '../assets/botaoinvisivelH.png', {
            frameWidth: 200,
            frameHeight: 42
        })
    }
    create () {

        this.imagem = this.add
        this.add.image(400, 225, 'fim')

        this.imagem = this.add
            .image(420, 399, 'botaoinvisivelH')
            .setInteractive()
            .on('pointerdown', () => {
                this.imagem.destroy()
                this.game.scene.stop('gameover')
                this.game.scene.start('abertura')
            })



    }
}