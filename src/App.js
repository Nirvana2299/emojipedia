import "./styles.css";
import Emojipedia from "./emojipedia";
import Dictionary from "./dictionary";
import Footer from "./Footer";

export default function App() {
  function emojiCard(emoji) {
    return (
      <Dictionary
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(emojiCard)}</dl>
      <Footer />
    </div>
  );
}
