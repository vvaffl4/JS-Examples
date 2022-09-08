describe(("Check if module"), () => {
  it("Reversi exists", () => {
    expect(typeof Game.Reversi.init).toBe('function');
  });

  it("Data exists", () => {
    expect(typeof Game.Data.init).toBe('function');
  });

  it("Model exists", () => {
    expect(typeof Game.Model.init).toBe('function');
  });
});