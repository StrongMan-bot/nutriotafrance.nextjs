import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail3 = () => {
  const { t, i18n } = useTranslation('news3');
  const router = useRouter();

  const newsItem = {
    id: 3,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail3.jpg",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: i18n.language === 'fr' ? `
      <h3>La Molécule Révolutionnaire Anti-Âge dont Votre Médecin ne Parle Pas</h3>
      <p>Les scientifiques l'appellent "l'antioxydant universel". Les experts en beauté chuchotent sur ses pouvoirs transformateurs pour la peau. Mais la plupart des gens n'ont jamais entendu parler de cette fontaine de jouvence cellulaire qui se cache à la vue de tous.</p>

      <h3>La Découverte qui Change Tout</h3>
      <p>Pendant que vous dépensez des centaines d'euros en crèmes et traitements qui n'agissent qu'en surface, il y a une molécule qui travaille au niveau le plus profond - vos mitochondries - pour ralentir effectivement le vieillissement de l'intérieur.</p>

      <h4>Acide Alpha Lipoïque (ALA) : Le Protecteur Cellulaire Universel</h4>
      <p>Les effets anti-âge de cet antioxydant naturel synthétisé dans les tissus humains ont attiré un intérêt croissant ces dernières années. Mais voici ce qui le rend extraordinaire : il est à la fois hydrosoluble et liposoluble, ce qui signifie qu'il peut protéger chaque cellule de votre corps.</p>

      <h3>Pourquoi Votre Peau Vieillit Plus Vite qu'elle ne Devrait</h3>
      <p>Chaque jour, vos cellules sont attaquées par :</p>
      <ul>
        <li><strong>Radicaux libres</strong> de la pollution, du stress et des rayons UV</li>
        <li><strong>Glycation</strong> - quand les molécules de sucre endommagent votre collagène</li>
        <li><strong>Inflammation</strong> qui dégrade les tissus sains</li>
        <li><strong>Stress oxydatif</strong> qui accélère le vieillissement cellulaire</li>
      </ul>

      <h3>L'Effet Machine à Remonter le Temps Cellulaire</h3>
      <p>L'Acide Alpha Lipoïque ne neutralise pas seulement un type de radical libre - c'est comme avoir une clé maître qui débloque la protection pour chaque partie de votre cellule :</p>
      <ul>
        <li><strong>Recycle d'Autres Antioxydants</strong> - Redonne vie à la vitamine C, la vitamine E et le glutathion</li>
        <li><strong>Protège Vos Mitochondries</strong> - Les centrales électriques de vos cellules restent jeunes et énergiques</li>
        <li><strong>Prévient la Glycation</strong> - Empêche le sucre de créer des Produits Finaux de Glycation Avancée (AGEs) qui accélèrent le vieillissement</li>
        <li><strong>Réduit l'Inflammation</strong> - Calme l'inflammation chronique qui vous vieillit de l'intérieur</li>
      </ul>

      <h3>La Transformation Visible</h3>
      <p>En quelques semaines avec des niveaux optimaux d'ALA, les gens remarquent :</p>
      <ul>
        <li>Une peau qui brille avec un halo sain qu'ils n'avaient pas vu depuis des années</li>
        <li>Réduction des rides fines pendant que les mécanismes de réparation cellulaire s'activent</li>
        <li>Teint plus uniforme grâce à la guérison des dommages inflammatoires</li>
        <li>Amélioration de la texture grâce à la protection avancée du collagène</li>
      </ul>

      <h3>Au-delà de la Beauté : La Réinitialisation Totale du Corps</h3>
      <p>Les propriétés anti-âge de l'ALA vont bien au-delà de la peau :</p>
      <ul>
        <li><strong>Énergie Renforcée</strong> - Vos mitochondries deviennent plus efficaces, vous donnant la vitalité de quelqu'un de plus jeune</li>
        <li><strong>Plus de Clarté Mentale</strong> - Des cellules cérébrales protégées signifient une meilleure concentration et mémoire</li>
        <li><strong>Récupération Améliorée</strong> - Votre corps récupère plus rapidement du stress et de l'exercice</li>
        <li><strong>Meilleur Contrôle de la Glycémie</strong> - L'ALA aide vos cellules à utiliser le glucose plus efficacement</li>
      </ul>

      <h3>La Recherche qui Démontre son Efficacité</h3>
      <p>Des études récentes ont montré que l'ALA peut agir sur les infections virales en modulant les paramètres biochimiques, virologiques, immunologiques et neurologiques. Mais c'est dans la recherche anti-âge que les choses deviennent vraiment excitantes.</p>

      <h4>Les Bases Scientifiques</h4>
      <p>L'ALA est un acide gras à chaîne courte contenant du soufre présent dans les mitochondries de tous les types de cellules eucaryotes, et les formes oxydée et réduite fournissent toutes deux une protection puissante contre les dommages cellulaires liés à l'âge.</p>

      <h3>Les Accélérateurs de l'Âge Cellulaire qui Vous Attaquent en Ce Moment</h3>
      <p>Chaque seconde, vos cellules sont assiégées par une armée invisible d'accélérateurs de l'âge :</p>
      <ul>
        <li><strong>Assaut des Radicaux Libres</strong> - Ces molécules instables volent des électrons à vos cellules saines</li>
        <li><strong>Attaque de Glycation</strong> - Les molécules de sucre se lient aux protéines comme le collagène</li>
        <li><strong>Feu Inflammatoire</strong> - L'inflammation chronique de bas niveau brûle à travers votre corps comme un feu lent</li>
        <li><strong>Décadence Mitochondriale</strong> - Vos centrales électriques cellulaires perdent progressivement leur efficacité</li>
      </ul>

      <h3>Les Standards de Qualité qui Comptent</h3>
      <p>L'industrie des compléments est inondée de produits ALA de qualité inférieure qui ne fournissent pas de résultats. Voici ce qu'il faut chercher :</p>
      <ul>
        <li><strong>R-Acide Alpha Lipoïque</strong> - C'est la forme naturellement présente que votre corps utilise effectivement</li>
        <li><strong>Formulation Stabilisée</strong> - L'ALA pur est instable et se dégrade rapidement</li>
        <li><strong>Dosage Correct</strong> - La recherche soutient 300-600mg quotidiens pour les bénéfices anti-âge</li>
        <li><strong>Tests de Tiers</strong> - Votre ALA devrait être testé pour la pureté et la puissance par un laboratoire indépendant</li>
      </ul>

      <h3>Le Défi de la Jeunesse de 90 Jours</h3>
      <ul>
        <li><strong>Mois 1 : Les Fondations</strong> - Vos défenses antioxydantes cellulaires se renforcent</li>
        <li><strong>Mois 2 : Les Changements Visibles</strong> - La peau commence à paraître plus lumineuse et lisse</li>
        <li><strong>Mois 3 : La Transformation</strong> - Les effets cumulatifs deviennent indéniables</li>
      </ul>

      <h3>Ne Laissez Pas le Temps Gagner</h3>
      <p>Chaque jour qui passe sans niveaux optimaux d'ALA est un autre jour de vieillissement cellulaire incontrôlé. Mais vous avez plus de contrôle sur votre processus de vieillissement que vous ne l'avez jamais imaginé.</p>

      <p>La fontaine de jouvence n'est pas une source mythique - c'est la régénération cellulaire qui se produit dans vos mitochondries en ce moment. Donnez-lui l'avantage de l'ALA et découvrez ce que ça fait de rajeunir.</p>
    ` : `
      <h3>The Age-Reversing Molecule Your Doctor Isn't Telling You About</h3>
      <p>Scientists call it "the universal antioxidant." Beauty gurus whisper about its skin-transforming powers. But most people have never heard of the cellular fountain of youth hiding in plain sight.</p>

      <h3>The Discovery That Changes Everything</h3>
      <p>While you're spending hundreds on creams and procedures that only treat the surface, there's a molecule working at the deepest level - your mitochondria - to actually slow down aging from the inside out.</p>

      <h4>Alpha Lipoic Acid (ALA): The Universal Cellular Protector</h4>
      <p>The anti-aging effects of this natural antioxidant synthesized in human tissues have attracted a growing interest in recent years. But here's what makes it extraordinary: it's both water AND fat-soluble, meaning it can protect every single cell in your body.</p>

      <h3>Why Your Skin Is Aging Faster Than It Should</h3>
      <p>Every day, your cells are under attack from:</p>
      <ul>
        <li><strong>Free radicals</strong> from pollution, stress, and UV rays</li>
        <li><strong>Glycation</strong> - when sugar molecules damage your collagen</li>
        <li><strong>Inflammation</strong> that breaks down healthy tissue</li>
        <li><strong>Oxidative stress</strong> that accelerates cellular aging</li>
      </ul>

      <h3>The Cellular Time Machine Effect</h3>
      <p>Alpha Lipoic Acid doesn't just neutralize one type of free radical - it's like having a master key that unlocks protection for every part of your cell:</p>
      <ul>
        <li><strong>Recycles Other Antioxidants</strong> - Brings vitamin C, vitamin E, and glutathione back to life</li>
        <li><strong>Protects Your Mitochondria</strong> - The powerhouses of your cells stay young and energetic</li>
        <li><strong>Prevents Glycation</strong> - Stops sugar from creating age-accelerating Advanced Glycation End Products (AGEs)</li>
        <li><strong>Reduces Inflammation</strong> - Calms the chronic inflammation that ages you from the inside</li>
      </ul>

      <h3>The Visible Transformation</h3>
      <p>Within weeks of optimal ALA levels, people notice:</p>
      <ul>
        <li>Skin that glows with a healthy radiance they haven't seen in years</li>
        <li>Reduced fine lines as cellular repair mechanisms kick into high gear</li>
        <li>Even skin tone as inflammatory damage heals</li>
        <li>Improved texture from enhanced collagen protection</li>
      </ul>

      <h3>Beyond Beauty: The Total Body Reset</h3>
      <p>ALA's anti-aging properties extend far beyond skin deep:</p>
      <ul>
        <li><strong>Enhanced Energy</strong> - Your mitochondria become more efficient, giving you the vitality of someone years younger</li>
        <li><strong>Sharper Mental Clarity</strong> - Protected brain cells mean better focus and memory</li>
        <li><strong>Improved Recovery</strong> - Your body bounces back from stress and exercise faster</li>
        <li><strong>Better Blood Sugar Control</strong> - ALA helps your cells use glucose more effectively</li>
      </ul>

      <h3>The Research That Proves It Works</h3>
      <p>Recent studies have demonstrated that ALA can act on viral infections by modulating biochemical, virological, immunological, and neurological parameters. But the anti-aging research is where things get really exciting.</p>

      <h4>The Scientific Foundation</h4>
      <p>ALA is a short-chain sulfur-containing fatty acid occurring in the mitochondria of all kinds of eukaryotic cells, and both the oxidized and reduced forms provide powerful protection against age-related cellular damage.</p>

      <h3>The Cellular Age Accelerators Attacking You Right Now</h3>
      <p>Every second, your cells are under siege from an invisible army of age accelerators:</p>
      <ul>
        <li><strong>Free Radical Assault</strong> - These unstable molecules steal electrons from your healthy cells</li>
        <li><strong>Glycation Attack</strong> - Sugar molecules bind to proteins like collagen</li>
        <li><strong>Inflammatory Fire</strong> - Chronic low-level inflammation burns through your body like a slow fire</li>
        <li><strong>Mitochondrial Decay</strong> - Your cellular power plants gradually lose efficiency</li>
      </ul>

      <h3>The Quality Standards That Matter</h3>
      <p>The supplement industry is flooded with inferior ALA products that won't deliver results. Here's what to look for:</p>
      <ul>
        <li><strong>R-Alpha Lipoic Acid</strong> - This is the naturally occurring form that your body actually uses</li>
        <li><strong>Stabilized Formulation</strong> - Pure ALA is unstable and degrades quickly</li>
        <li><strong>Proper Dosage</strong> - Research supports 300-600mg daily for anti-aging benefits</li>
        <li><strong>Third-Party Testing</strong> - Your ALA should be tested for purity and potency by an independent laboratory</li>
      </ul>

      <h3>The 90-Day Youth Challenge</h3>
      <ul>
        <li><strong>Month 1: The Foundation</strong> - Your cellular antioxidant defenses strengthen</li>
        <li><strong>Month 2: The Visible Changes</strong> - Skin begins to look brighter and smoother</li>
        <li><strong>Month 3: The Transformation</strong> - The cumulative effects become undeniable</li>
      </ul>

      <h3>Don't Let Time Win</h3>
      <p>Every day that passes without optimal ALA levels is another day of unchecked cellular aging. But you have more control over your aging process than you ever imagined.</p>

      <p>The fountain of youth isn't a mythical spring - it's the cellular regeneration happening in your mitochondria right now. Give it the ALA advantage, and discover what it feels like to age backwards.</p>
    `
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <button 
          onClick={() => router.push('/news')}
          className="flex items-center gap-2 text-[#0089CF] hover:text-[#0074B7] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('backToNews')}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <OptimizedImage
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#0089CF] px-3 py-1 rounded-full text-sm font-medium">
                  {newsItem.category}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} />
                  {newsItem.date}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={16} />
                  {newsItem.author}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} />
                  {newsItem.readTime}
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {newsItem.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className={`prose prose-lg max-w-none ${styles.blogContent}`}
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('discoverMore')}
          </h3>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#0089CF] text-white px-6 py-3 rounded-lg hover:bg-[#0074B7] transition-colors font-semibold"
          >
            {t('backToNews')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail3;