<template>
  <AppSection title="Skills" subtitle="My technical level">
    <AppContainer class="skills__container grid mt-12">
      <div class="space-y-12">
        <div
          v-for="(skill, index) in skills"
          :key="skill.title"
          class="skills__content"
        >
          <SkillsExpand :opened="index == 0">
            <template v-slot:header>
              <div class="skills__header flex items-center">
                <Component
                  :is="skill.icon"
                  class="h-7 w-7 text-primary skills__icon"
                />
                <div class="ml-3 flex-1">
                  <h1 class="" v-text="skill.title" />
                  <span class="" v-text="skill.subtitle" />
                </div>
              </div>
            </template>

            <div class="grid mt-6 space-y-6 skills__list">
              <SkillsListItem
                v-for="skillItem in skill.list"
                :key="skillItem.name"
                class="ml-10"
                :name="skillItem.name"
                :percentage="skillItem.percentage"
              />
            </div>
          </SkillsExpand>
        </div>
      </div>
    </AppContainer>
  </AppSection>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          title: "Backend developer",
          subtitle: "More than 5 years",
          icon: "IconBracketsCurly",
          list: [
            {
              name: "Laravel",
              percentage: 90,
            },
            {
              name: "PHP",
              percentage: 80,
            },
            {
              name: "Node JS",
              percentage: 60,
            },
          ],
        },
        {
          title: "Frontend developer",
          subtitle: "More than 4 years",
          icon: "IconArrow",
          list: [
            {
              name: "HTML",
              percentage: 90,
            },
            {
              name: "CSS",
              percentage: 80,
            },
            {
              name: "JavaScript",
              percentage: 70,
            },
            {
              name: "Vue",
              percentage: 70,
            },
            {
              name: "React",
              percentage: 60,
            },
          ],
        },
      ],
    };
  },
};
</script>
