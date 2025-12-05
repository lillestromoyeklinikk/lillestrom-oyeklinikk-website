import { Eye, ShieldCheck, Activity, Glasses, Clock, Stethoscope } from 'lucide-react';
import { ServiceItem, PriceItem, FaqItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hjem', href: '#hero' },
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'For Henvisere', href: '#henvisere' },
  { label: 'Kontakt', href: '#kontakt' },
  { label: 'Pasientinfo', href: '/informasjonsmateriell' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Grå stær (Katarakt)',
    description: 'Utredning og henvisning til operasjon, samt etterkontroll.',
    icon: Eye,
  },
  {
    title: 'Grønn stær (Glaukom)',
    description: 'Trykkmåling, synsfeltundersøkelse og oppfølging av behandling.',
    icon: Activity,
  },
  {
    title: 'Diabeteskontroll',
    description: 'Regelmessig fotografering av netthinnen for å avdekke forandringer.',
    icon: Stethoscope,
  },
  {
    title: 'Tørre øyne',
    description: 'Utredning av årsak og personlig tilpasset behandlingsplan.',
    icon: Glasses,
  },
  {
    title: 'AMD (Forkalkning)',
    description: 'Diagnostisering og oppfølging av aldersrelatert makuladegenerasjon.',
    icon: ShieldCheck,
  },
  {
    title: 'Akutte plager',
    description: 'Vurdering av øyeblikkelig hjelp på dagtid etter avtale med fastlege.',
    icon: Clock,
  },
];

export const PRICES: PriceItem[] = [
  { service: 'Egenandel (Offentlig avtale)', price: '386,-', note: 'Følger gjeldende satser. Frikort gjelder.' },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Hvordan får jeg time?',
    answer: 'Vi er en avtalespesialist, noe som betyr at du må ha henvisning fra fastlege eller optiker for å få time hos oss. Henvisningen sendes vanligvis elektronisk til oss.',
  },
  {
    question: 'Hvor lang er ventetiden?',
    answer: 'Ventetiden varierer basert på medisinsk hastegrad i henvisningen din. Vi prioriterer alltid øyeblikkelig hjelp og alvorlige tilstander først.',
  },
  {
    question: 'Hva koster en konsultasjon?',
    answer: 'Du betaler kun offentlig egenandel. Har du frikort, betaler du ingenting. Vi følger gjeldende takster fra Helfo.',
  },
  {
    question: 'Er det parkering i nærheten?',
    answer: 'Ja, det er gjesteparkering ved klinikken. Du må registrere bilnummeret ditt innendørs på en pad for å få 90 minutter gratis parkering.',
  },
];