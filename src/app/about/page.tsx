import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">À Propos de Notre Initiative</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Notre Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Notre mission est d&apos;inspirer et d&apos;encourager plus de femmes à poursuivre 
              des carrières en ingénierie au Maroc. Nous mettons en lumière les réussites 
              des femmes ingénieures marocaines et fournissons des informations précieuses 
              sur les différentes filières d&apos;ingénierie.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pourquoi les Femmes en Ingénierie ?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diversité de perspectives dans la résolution de problèmes</li>
              <li>Innovation accrue grâce à des équipes diverses</li>
              <li>Modèles inspirants pour les générations futures</li>
              <li>Réduction de l&apos;écart entre les genres dans les STEM</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nos Objectifs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informer sur les opportunités en ingénierie</li>
              <li>Mettre en valeur les success stories</li>
              <li>Créer un réseau de soutien</li>
              <li>Faciliter l&apos;orientation des étudiantes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 