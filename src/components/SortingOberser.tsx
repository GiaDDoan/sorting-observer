import { useContext } from 'react'
import { AlgoContext, ItemsContext } from '../contexts/AlgoProvider'

const SortingOberser = () => {
  const { items } = useContext(ItemsContext);
  const { settings } = useContext(AlgoContext);

  return (
    <section className='row-span-5'>
      <div className='flex w-full h-full items-end px-1'>
        {items.map((item, idx) => (
          <div
          id={`${idx}`}
            key={`${item}-${settings.arrayLen}-${idx}`}
            className={`flex-1`}
            style={{
              backgroundColor: "#482",
              height: `${item / 7}%`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default SortingOberser