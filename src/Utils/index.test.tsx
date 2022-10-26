import { sleep } from 'Utils'

vi.useFakeTimers()

describe('utils index', () => {
  const mockSetTimeout = vi.spyOn(global, 'setTimeout')

  beforeEach(() => {
    mockSetTimeout.mockClear()
  })

  it('sleep', () => {
    sleep(1000)
    expect(mockSetTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  })
})
