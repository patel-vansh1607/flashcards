import { useState } from "react"

const FlashCards = ({card}) => {
    const [flipped, setFlipped] = useState(false)
    return(
        <div>
            <div className={`flashcard $ {flipped ? "flipped" : ""}`} onclick={() => setFlipped(!flipped)}>
                
            </div>
        </div>
    )
}
export default FlashCards