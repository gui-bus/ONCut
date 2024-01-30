import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "../(home)/_components/search";
import BookingItem from "../_components/booking-item";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const SearchSection = () => {
  return (
    <section className="flex flex-col gap-y-5 bg-[url('/capa.png')] bg-cover bg-center bg-no-repeat px-5 py-10">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Olá, Guilherme!</h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <Search />

      <div className="flex flex-col gap-y-2">
        <h2 className="text-sm uppercase text-neutral-300 flex gap-2 items-center">
          Agendamentos <MdOutlineBookmarkAdded size={25}/>
        </h2>
        <BookingItem />
      </div>
    </section>
  );
};

export default SearchSection;
