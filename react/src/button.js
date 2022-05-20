'use strict';
function LikeButton() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return 'You liked this!';
    }

    return React.createElement(
        'button',
        {
            onClick: () => setLiked(true),
        },
        'Like'
    );
}
function LikeButton2() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return 'You liked this!';
    }

    return <button onClick={() => setLiked(true)}>Like</button>;
}
const domContainer = document.getElementById('component-goes-here');
const hhhhhhh = document.getElementById('hhhh');
ReactDOM.render(React.createElement(LikeButton), domContainer);
ReactDOM.render(React.createElement(LikeButton2), hhhhhhh);
