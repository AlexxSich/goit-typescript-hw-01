//Вітаю. Підкажіть будь ласка, чому тут виникає помилка?
// ШІ підказує, що треба спреднути ці обєкти, щоб обєднати в новий обєкт return { ...objA, ...objB }
// а в конспекті так як написано нижче.

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}