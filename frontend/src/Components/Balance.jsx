export function Balance ({Amount}){
    return (
        <div className="flex">
          <div className="font-bold text-lg">
          Your Balance:
          </div>
          <div className="font-semibold ml-4 text-lg">
            Rs {Amount}
          </div>
        </div>
    )
}