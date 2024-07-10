import { CircleCheck } from "lucide-react";

export function Activities() {
  return(
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <h2 className="text-xl font-semibold text-zinc-300">Dia 17</h2>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <h2 className="text-xl font-semibold text-zinc-300">Dia 18</h2>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <h3 className="text-zinc-100">Academia em grupo</h3>
            <span className="text-zinc-400 text-sm ml-auto">08:00</span>
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <h3 className="text-zinc-100">Academia em grupo</h3>
            <span className="text-zinc-400 text-sm ml-auto">08:00</span>
          </div>
        </div>
      </div>

    </div>
  )
}