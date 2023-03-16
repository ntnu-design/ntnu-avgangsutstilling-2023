const HOST = "http://localhost:3000"

export default function imageLoader({ src, width, quality }) {
    return `${HOST}/${src}?w=${width}&q=${quality || 100}`
}
