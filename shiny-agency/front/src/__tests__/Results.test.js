import {formatJobList, formatFetchParams} from '../pages/Results'

describe('Tests de la page Results', () => {
	describe('Tests de la fonction formatJobList', () => {
		it("should add a coma to the not-last element of the list", () => {
			// On prend par exemple un élément item2 qui sera en deuxième position dans notre liste (son index est donc de 1), 
			// mais qui ne sera pas le dernier élément : on veut donc que le titre ajoute une virgule. 
			// formatJobList(itemTitle, listLength, index)
			const expectedState = 'item2,'
			expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
		})
		it("not add a coma to the last element of the list", () => {
			const expectedState = 'lastItem'
			expect(formatJobList('lastItem', 3, 2)).toEqual(expectedState)
		})
	})
	describe('Tests de la fonction formatFetchParams', () => {
		it('should use the right format for param', () => {
			const answers = {1: true}
			const expectedState = 'a1=true'
			expect(formatFetchParams(answers)).toEqual(expectedState)
		  })
		it('should concatenate params with an &', () => {
			const answers = {1: false, 2: false, 3: true, 4: true, 5: false, 6: true}
			const expectedParams = 'a1=false&a2=false&a3=true&a4=true&a5=false&a6=true'
			expect(formatFetchParams(answers)).toBe(expectedParams)
		})
	})
})