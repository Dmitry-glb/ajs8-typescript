import Movie from '../movie';

describe('Movie', () => {
  const movie = new Movie(
    'Мстители',
    'The Avengers',
    2012,
    'США',
    '«Avengers Assemble»',
    'фантастика, боевик, фэнтези, приключения',
    137,
  );

  test('getInfo returns correct string', () => {
    const expected = `
      • год: 2012
      • страна: США
      • слоган: ««Avengers Assemble»»
      • жанр: фантастика, боевик, фэнтези, приключения
      • время: 137 мин. / 02:17
    `.trim();
    expect(movie.getInfo().trim()).toBe(expected);
  });
});