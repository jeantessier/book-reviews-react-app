// Based on Medium's read time calculation
// https://blog.medium.com/read-time-and-you-bc2048ab620c
// but without the additional time for images.

const DEFAULT_WORDS_PER_MINUTE= 275
const DEFAULT_HIDE_THRESHOLD = 1

const countWords = text => text.split(/\s+/).length

const computeReadingTime = (text, wordsPerMinute) => Math.ceil(countWords(text) / wordsPerMinute)

export default function ReadingTime({text, wordsPerMinute = DEFAULT_WORDS_PER_MINUTE, hideThreshold = DEFAULT_HIDE_THRESHOLD}) {
    const readingTime = computeReadingTime(text, wordsPerMinute)

    if (readingTime > hideThreshold) {
        return (
            <section>
                {readingTime} min read
            </section>
        )
    } else {
        return ""
    }
}
