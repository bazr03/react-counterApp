import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con Primesas", () => {
  test("getHeroeByIdAsync debe retornar un héroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Debe mandar error si heroe no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
