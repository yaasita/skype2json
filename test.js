import test from "ava";

test("extract_name", async t => {
  t.is(extract_name("8:hoge_hoge"), "hoge_hoge");
  t.is(extract_name("8:live:huga"), "huga");
  t.is(
    extract_name("https://example.com/ME/contacts/4:+1234567890"),
    "+1234567890"
  );
  t.is(extract_name("https://example.com/contacts/8:live:abc"), "abc");
});

function extract_name(url) {
  const result = url.match(/\+?\w+$/);
  if (result) {
    return result[0];
  }
  throw new Error(`extract name fail ${url}`);
}
