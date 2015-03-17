describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first the first letter of each word in a title", function() {
  	expect(titleCase("the black panther")).to.eq("The Black Cat");
  });

  it("capitalizes words that are even camel case", function() {
  	expect(titleCase("tHe awEsOmE BaNd")).to.eq("The Awesome Band");
  });
});