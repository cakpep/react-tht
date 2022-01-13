import api from '../Api';

global.fetch = jest.fn(() => Promise.resolve({
    json: jest.fn(() => ({ items: [] })),
}));

describe('API Test', () => {
    test('get ballon data', async () => {
        const results = await api.getBallotData();
        expect(results.items).toStrictEqual([]);
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledWith('/api/getBallotData');
    });
});