import { sound } from '@pixi/sound'

// Add new audio files here
export const audioFiles = {
    sound1: '/path/to/sound1.wav',
}

Object.values(audioFiles).forEach(value => {
    sound.add(value, value)
})

export const playAudio = async (audioFile) => {
    sound.play(audioFile)
}
