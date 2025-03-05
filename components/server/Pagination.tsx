import Link from "next/link";

interface PaginationProps {
  page: number;
  size: number;
  total: number;
}

const Pagination = ({ page, size, total }: PaginationProps) => {
  const totalPages = Math.ceil(total / size);
  return (
    <section className="container mx-auto flex justify-center items-center my-8">
      {page > 1 ? (
        <Link
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
          href={`/properties?page=${page - 1}`}
        >
          Anterior
        </Link>
      ) : null}

      <span className="mx-2">
        {" "}
        Página {page} de {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          className="ml-2 px-2 py-1 border border-gray-300 rounded"
          href={`/properties?page=${page + 1}`}
        >
          Próxima
        </Link>
      ) : null}
    </section>
  );
};
export default Pagination;
