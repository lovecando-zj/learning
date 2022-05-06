type animal = {
  fly: () => void;
  name?: string;
};
type botany = {
  quiet: Boolean;
};
const dog = (move: animal | botany): move is botany => {
  if ("name" in move) {
    move.fly();
  }
  return (move as animal).fly !== undefined;
};
dog({
  name: "dog",
  fly() {
    console.log("I can fly");
  },
});

