type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Top = Pick<AllType, "name" | "color">;
type Bottom = Pick<AllType, "position" | "weight">;

function compare(top: Top, bottom: Bottom): AllType {
  return {
    name: top.name,
    position: bottom.position,
    color: top.color,
    weight: bottom.weight,
  };
}
