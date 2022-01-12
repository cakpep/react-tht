import api from '../Api';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue({ items: [] })
    })
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('API Test', () => {
    test('get ballon data', async () => {
        const results = await api.getBallotData();
        expect(results.items).toStrictEqual([]);
    });
});