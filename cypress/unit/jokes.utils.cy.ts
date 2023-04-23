import { findOldestJoke } from '@utils/jokes.utils';

describe('Jokes utils', () => {
    const oldestJokeDate = new Date('2022-01-01').toISOString();
    const oldestNextDayJokeDate = new Date('2022-01-02').toISOString();
    const oldestNextMonthJokeDate = new Date('2022-02-01').toISOString();
    const newestJokeDate = new Date().toISOString();

    const oldestJoke: IJoke = { id: 'oldestJoke', created_at: oldestJokeDate, updated_at: oldestJokeDate, value: '' };
    const oldestNextDayJoke: IJoke = { id: 'oldestNextDayJoke', created_at: oldestNextDayJokeDate, updated_at: oldestNextDayJokeDate, value: '' };
    const oldestNextMonthJoke: IJoke = { id: 'oldestNextMonthJoke', created_at: oldestNextMonthJokeDate, updated_at: oldestNextMonthJokeDate, value: '' };
    const newestJoke: IJoke = { id: 'newestJoke', created_at: newestJokeDate, updated_at: newestJokeDate, value: '' };

    it('Should return null if there are no jokes', () => {
        const oldestJokeDate = findOldestJoke([]);
        expect(oldestJokeDate).to.equal(null);
    })

    it('Should found the oldest joke when passing a list of jokes', () => {
        const oldestJokeDate = findOldestJoke([newestJoke, oldestNextDayJoke, oldestJoke, oldestNextMonthJoke]);
        expect(oldestJokeDate?.id).to.equal(oldestJoke.id);
    })
})