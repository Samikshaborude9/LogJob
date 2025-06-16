import { Users, Briefcase } from "lucide-react";

export default function Stats() {
  return (
    <section className="flex justify-center gap-10 py-8 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <Briefcase className="text-blue-600" />
        <span>200+ Clients Served</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="text-blue-600" />
        <span>3000+ Candidates Placed</span>
      </div>
    </section>
  );
}
