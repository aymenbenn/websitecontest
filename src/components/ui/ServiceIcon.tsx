import React from 'react';
import {
  BotIcon,
  GaugeIcon,
  LayersIcon,
  LayoutIcon,
  LineChartIcon,
  SearchIcon,
  TargetIcon } from
'lucide-react';
import type { Service } from '../../types/audit';

const map = {
  gauge: GaugeIcon,
  search: SearchIcon,
  layout: LayoutIcon,
  bot: BotIcon,
  chart: LineChartIcon,
  target: TargetIcon,
  layers: LayersIcon
} as const;

export function ServiceIcon({ name, className = 'h-4 w-4' }: {name: Service['icon'];className?: string;}) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden="true" />;
}